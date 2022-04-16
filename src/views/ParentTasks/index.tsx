import SearchBar from "../../components/SearchBar";
import TabBar from "../../components/TabBar";
import { Divider, IconButton, List, ListItem } from '@mui/material';
import TrashCanIcon from '../../assets/trash-can-icon.svg';
import AddIcon from '../../assets/add-icon.svg';
import './styles.scss';

function ParentTasks() {
  const tasks: string[] = ['Arrumar a cama', 'Escovar os dentes', 'Estudar para a prova', 'Estudar piano', 'Contar como foi o dia'];
  return (
    <TabBar >
      <div className='parents-tasks'> 
        <text className='title'> Atividades </text>
        <SearchBar />
        <List className='tasks' sx={{width: '135%'}} component="nav" aria-label="tasks">
        {tasks.map((task) =>
            <div>
              <ListItem className='task'>
                <text> {task} </text>
                <IconButton className='trash-can-icon'>
                  <img src={TrashCanIcon} alt="Lata de lixo" />
                </IconButton>
              </ListItem>
              <Divider />
            </div>
          )}
        </List>
      </div>
      <IconButton sx={{marginLeft: 'auto', marginTop: 'auto', padding: '8%'}}>
        <img src={AddIcon} alt="Adicionar tarefa" />
      </IconButton>
    </TabBar>
  );
}

export default ParentTasks;
