import classNames from 'cassnames';

function Skeleton({ times }) {
  /*
  @ simple way
  const boxes = [];

  for (let i = 0; i < times; i++) {
    boxes.push(<div key={i} />);
  }

  return boxes;
  */

  /*
  @ fancier way, more concise 
  */
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return <div key={i} />;
    });

  return boxes;
}

export default Skeleton;
