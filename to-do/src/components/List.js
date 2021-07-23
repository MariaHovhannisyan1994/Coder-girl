import ListItem from "./ListItem";



const List = ({ data, remove, update  }) => {
  return (
    <div className="list-wrapper">
       {data.length ? (
        data.map((item, key) => (
          <ListItem
            key={key}
            remove={remove}
            update={update}
            id={item.id}
            title={item.title}
            completed={item.completed}
          />
        ))
      ) : (
         " "
      )}
    </div>
  );
};

export default List;
