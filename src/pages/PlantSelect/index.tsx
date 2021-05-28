import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EnviromentButton from '../../components/EnviromentButton';
import Header from '../../components/Header';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import api from '../../services/api';
import { 
  Container,
  HeaderContent,
  Title,
  SubTitle,
  ListButton,
  ListPlants, 
} from './styles';

interface PlantEnvironments {
  key: string;
  title: string;
}

interface PlantsProps {
  id: number,
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: 2,
    repeat_every: string
  }
}

const PlantSelect: React.FC = () => {
  const [plants_environments, setPlants_environments] = useState<PlantEnvironments[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [environmentsSelected, setEnvironmentsSelected] = useState('all');
  
  useEffect(() => {
    const loadPlants_environments = async() => {
      const response = await api.get('/plants_environments?_sort=title&order=asc');
      setPlants_environments([{ key: 'all', title: 'Todos' }, ...response.data]);
    }

    loadPlants_environments();
  }, []);

  useEffect(() => {
    const loadPlants = async() => {
      const { data } = await api.get('/plants?_sort=name&order=asc');
      setPlants(data);
    }
    loadPlants();
  }, [])

  const handleEnvironmentSelect = (value: string) => {
    setEnvironmentsSelected(value);
  }

  return (
    <Container>
      <Header />

      <HeaderContent>
        <Title>Em qual ambiente</Title>
        <SubTitle>
          você quer colocar sua planta?
        </SubTitle>
      </HeaderContent>

      <ListButton>
        <FlatList 
          data={plants_environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item: plants_environments }) => (
            <EnviromentButton 
              title={plants_environments.title}
              isActive={plants_environments.key === environmentsSelected}
              onPress={() => handleEnvironmentSelect(plants_environments.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ListButton>

      <ListPlants>
        <FlatList 
          data={plants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item: plant }) => (
            <PlantCardPrimary 
              data={plant}
              style={styles.ListPlants}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </ListPlants>
    </Container>
  );
}

export default PlantSelect;

const styles = StyleSheet.create({
  ListPlants: {
    justifyContent: 'center',
  }
});