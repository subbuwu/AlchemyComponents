import Cards from "../CardSection/Cards"

const HorizontalScrollCards = () => {
  const n = 4;
  const scrollableCards = Array.from({ length: n }, (_, index) => index);
  return (
    <>
        {
          scrollableCards.map((card)=>(
            <Cards CardTitle="Account Kit" CardSubTitle="A complete account solution" CardDescription="No seed phrase, no gas fees. Bring users onchain in seconds using smart accounts." />
          ))
        }
    </>
  )
}

export default HorizontalScrollCards