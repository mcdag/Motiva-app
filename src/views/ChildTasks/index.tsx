import React from 'react';
import './styles.scss';
import ChildHeader  from '../../components/ChildHeader';
import ChildActivity from '../../components/ChildActivity';

import LogoutIcon from '../../assets/logout-icon.svg';

interface Activity {
  id: number;
  name: string;
  status: boolean;
}

interface ActivityList {
  alone: Activity[];
  parent: Activity[];
}

function ChildTask() {
    const aloneList: Activity[] = [
      {id:1, name: 'Arrumar a cama', status: false },
      {id:2, name: 'Escovar os dentes', status: true },
      {id:3, name: 'Estudar para a prova', status: false },
    ];
    const parentList: Activity[] = [
      {id:0, name: 'Contar como foi o dia', status: false },
    ];
    const list: ActivityList = {alone:aloneList, parent:parentList};

    return (
      <div className='child-task-container'>
        <ChildHeader valueCoin={350} backButton={false} />
        <main className='body'>
          <div className='body-header'>
            <h1 className='title'>Atividades</h1>
            <img className='logout' src={LogoutIcon} alt="Icone de logout" />
          </div>
          <div className='child-tasks'>
            <h2 className=''>Para tentar realizar sozinho</h2>
            {list.alone.map((activity, index) => 
              <ChildActivity activityName={activity.name} activityStatus={activity.status} />
            )
            }
          </div>
          <div className='parent-tasks'>
            <h2 className=''>Para tentar realizar sozinho</h2>
            {list.parent.map((activity, index) => 
              <ChildActivity activityName={activity.name} activityStatus={activity.status} />
            )
            }
          </div>
        </main>
      </div>
    );
  }
  
  export default ChildTask;