const Button = () => {
   
    const [data, setData] = useState([])
     const handlesubmit = ()=>{
        console.log('Data Added');
        setData(data);
     }
    return (
        <>
          <H1>{data}</H1>
          <input placeholder="Add something" onChange={(e)=> setData(e.target.value)} />
          <button onClick={handlesubmit}>Add</button>

        </>
    )
}

export default Button