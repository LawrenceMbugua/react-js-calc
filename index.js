const wrapperDiv = {
    border: '1px solid',
    width: 'fit-content',
    margin: '10px auto',
    marginTop: '100px',
    borderRadius: '5px',
    backgroundColor: 'grey',
    color: 'white',
    fontWeight: 'bold'
}

const display = {
    fontSize: '20px'
} 

const buttonContainer = {
    display: 'grid',
    grid: '90px / auto auto auto auto',
    
}


function App() {

    //States
    const [display, setDisplay] = React.useState(0)



    //Numbers handler
    const handleNumber = (e) => {
        let number = e.target.textContent;
        if (display == '0') {
            setDisplay(number)
        } else {
            setDisplay(display + number)
        }
        
    }

    //Decimal
    const handleDecimal = (e) => {
        const array = display.split(' ')
        const lastElement = array[array.length-1];
        if (!lastElement.includes('.') && typeof(parseFloat(lastElement)) === 'number') {
            setDisplay(display + '.')
        }
    }


    //Operations handler
    const handleOperator = (e) => {
        const operators = ['+', '/', '*']
        
        const operator = e.target.innerText;
        const strArr = display.toString().split('')
        const lastChar = strArr[strArr.length - 2]
        
        if (!operators.includes(lastChar)) {
            setDisplay(display + ' ' + operator  + ' ')
            
        } else {
            setDisplay(display.slice(0, -2) + ' ' + operator  + ' ')
        }
    } 


    //Equal sign handler

    const handleEqual = (e) => {
       setDisplay( eval(display) )
    }

    //All clear
    const handleAllClear = () => {
      setDisplay(0)
    }

    //Delete
    const handleDelete = () => {
        setDisplay(display.toString().slice(0, -1))
    }



    return (
        
            
            <div style={wrapperDiv} >

                <div style={{borderBottom: '1px solid', height: '100px', textAlign: 'right'}} className='outputScreen' id='display'>
                    <p style={{padding: 10}}>{display}</p>
                </div>
            
                <div className='buttons' style={buttonContainer}>
                    
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px', gridArea: '1 / 1 / span 1 / span 2'}} onClick={handleAllClear} id="clear">AC</button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleOperator} id="divide"> / </button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleOperator} id="multiply"> * </button>
              

                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleNumber} id="zero">0</button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleNumber} id="one">1</button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleNumber} id="two">2</button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleOperator} id="subtract"> - </button>
              

                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleNumber} id="three">3</button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleNumber} id="four">4</button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleNumber} id="five">5</button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleOperator} id="add"> + </button>
              
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleNumber} id="six">6</button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleNumber} id="seven">7</button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleNumber} id="eight">8</button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleNumber} id="nine">9</button>
              
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleDecimal} id="decimal">.</button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px'}} onClick={handleDelete}>DEL</button>
                    <button style={{backgroundColor:'brown', color:'white', border:'none' ,padding: '20px', gridArea: '5/ 3 / span 1 / span 2'}} onClick={handleEqual} id="equals">=</button>

                </div>
            </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

