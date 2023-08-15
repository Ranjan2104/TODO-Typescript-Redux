import { useSelector } from 'react-redux';
import Card from './Card';
import { useSearchParams } from "react-router-dom";

const DisplayData = () => {
  const { todoData } = useSelector((state) => state.todoData);
  const [searchParams] = useSearchParams();

  let filterData = todoData;

  if (searchParams.get('todo') === "active") {
    filterData = filterData.filter((task) => !task?.checked);
  }

  if (searchParams.get('todo') === "completed") {
    filterData = filterData.filter((task) => task?.checked);
  }

  return (
    <div>
      <hr style={{ width: '40em' }} />
      {
        filterData && filterData
          .map((ele, index) => {
            return (
              <div key={index}>
                <Card data={ele.data} index={index} />
                <hr style={{ width: '40em' }} />
              </div>
            )
          })
      }
    </div>
  )
}

export default DisplayData