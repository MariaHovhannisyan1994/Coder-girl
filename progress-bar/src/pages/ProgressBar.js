import { Fragment, useState } from "react";
import Progress from "../components/ProgressBar/Progress";


const data = [
  {
    progress: 30,
    starNumber: 1,
    background: "#A1C181",
  },
  {
    progress: 46,
    starNumber: 2,
    background: "#FCCA46",
  },
  {
    progress: 60,
    starNumber: 3,
    background: "#619B8A",
  },
  {
    progress: 80,
    starNumber: 4,
    background: "#FE7F2D",
  },
];

const compareStates = (prevState, nextState) => {
  if (prevState.length !== nextState.length) {
    return false;
  }

  const isEqual = JSON.stringify(prevState) === JSON.stringify(nextState);
  return isEqual;
};

const ProgressBar= () => {
  const [state, setState] = useState(data);

  // long version
  const increment = (itemIndex) => {
    const prevState = state;
    const nextState = state.map((item, key) => {
      const currentIndex = key === itemIndex;
      const more100 = item.progress + 5 > 100;
      const nextProgress = more100 ? 100 : item.progress + 5;

      if (currentIndex) {
        return { ...item, progress: nextProgress };
      } else {
        return item;
      }
    });
    const isEqual = compareStates(prevState, nextState);

    if (!isEqual) {
      setState(nextState);
    }
  };

  // short version 
  // const increment = (itemIndex) => {
  //   const newState = state.map((item, key) =>
  //     key === itemIndex && item.progress + 5 <= 100
  //       ? {
  //           ...item,
  //           progress: item.progress + 5,
  //         }
  //       : item
  //   );
  //   setState(newState);
  // };

  return (
    <div>
      {state.map(({ progress, starNumber, background }, index) => (
        <Fragment key={index}>
          <Progress
            key={index}
            progress={progress}
            starNumber={starNumber}
            background={background}
          />
          <button className="prog-btn" onClick={() => increment(index)}>Increment progress</button>
        </Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
