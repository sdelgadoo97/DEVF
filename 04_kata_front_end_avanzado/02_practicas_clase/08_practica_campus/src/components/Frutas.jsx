function Frutas(props) {

const frutas = props

const keys = Object.keys(frutas)

console.log(keys);

  return (
      <>
        {keys.map((fruta, index) => <li key={index}>{fruta}</li>)}
      </>
  )

}

export default Frutas;
