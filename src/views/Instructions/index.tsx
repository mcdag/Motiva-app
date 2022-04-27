import Instruction from '../../components/Instruction';
import './styles.scss';

function ActivityInstructions() {
  const activity = {
    name: 'Contar como foi o dia',
    instructions: ['Faça uma lista de coisas importantes que teve no seu dia', 'Anote todos os itens em uma folha de papel', 'Passe por cada item da lista e fale para o seu responsável o quão legal foi cada lugar', 'Dê um abraço caloroso no seu responsável']
  }
  return (
    <div className='activities-instructions-container'>
      <p className='activity-name'> {activity.name}</p>
      {activity.instructions.map((instruction, index) => 
        <Instruction number={index+1} description={instruction} />
      )}
    </div>
  );
}

export default ActivityInstructions;