import React from 'react'
import {format,startOfWeek, endOfWeek, subWeeks,addWeeks} from 'date-fns'
import addDays from 'date-fns/addDays'
import Hour from '../components/Hour'

export class Week extends React.Component{

    state = {
        selectedDate: new Date(),
        currentWeek: new Date()
    }

    renderHeader() {
        const dateFormat = ' dd MMM yyyy'
         let startDate = startOfWeek(this.state.currentWeek)
        let endDate = endOfWeek(this.state.currentWeek)

        return(
            <div className = "header row flex-middle">
            <div className= "col col-start">
            <div className = "icon" onClick ={this.prevWeek}>chevron_left</div>
            </div>
            <div className = "col col-center">
            <span>
             <b>
            {format(startDate,dateFormat)}-{format(endDate,dateFormat)}
            </b>
            </span>
            <div>
            </div>
            </div>
            <div className ="col col-end">
            <div className ="icon" onClick ={this.nextWeek}>chevron_right</div>
            </div>
            </div>
        )
    }

    renderDays(){
        const dateFormat = "eeee"
        const days = []
        let startDate = startOfWeek(this.state.currentWeek)
        for(let i=0;i<7;i++)
        {
            days.push(
             <div className="col col-center" key={i}>
            {format(addDays(startDate, i), dateFormat)}
            </div>
            )
        }
        return <div className="days row">{days}</div> 
    }
 
 
    
    renderCells(){
        const dateFormat = "dd"
        const days = []
        let startDate = startOfWeek(this.state.currentWeek)
        for(let i=0;i<7;i++)
        {
            days.push(
             <div className="col col-center" key={i}>
            {format(addDays(startDate, i), dateFormat)}
            </div>
            )
        }
        return <div className="days row">{days}</div> 
    }
    
   
    prevWeek = () => {
        let startDate = startOfWeek(this.state.currentWeek)
        this.setState({
            currentWeek: subWeeks(startDate,1)
        })

    }

    nextWeek = () => {
        let endDate = endOfWeek(this.state.currentWeek)
        this.setState({
            currentWeek:addWeeks(endDate,1)
        })
    }

    

    render(){
        return (
            <div>
            
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
            
           
            </div>
        );
    }
}
   


export default Week;