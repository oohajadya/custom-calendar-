import React from 'react'
import {addDays, format, subDays,addMonths, getDay} from 'date-fns'
import Hour from '../components/Hour'
import { Row,Col } from 'react-bootstrap'


export class Day extends React.Component{

    state = {
        selectedDate: new Date(),
        currentDay: new Date(),
    }

    renderHeader(){
        const dateFormat = 'dd MMMM yyyy '
       return(
           <div className = "header row flex-middle">
           <div className= "col col-start">
           <div className = "icon" onClick ={this.prevDay}>chevron_left</div>
           </div>
           <div className = "col col-center">
           <span>
            <b>
           {format(this.state.currentDay, dateFormat)}
           </b>
           </span>
           <div>
           
           </div>
           </div>
           <div className ="col col-end">
           <div className ="icon" onClick ={this.nextDay}>chevron_right</div>
           </div>
           </div>
       )
    }
    renderDays(){
        const dateFormat = 'eeee'; 
        return(
       <div className ="days row">
       <div className = "col col-center">
           <span>
           {format(this.state.selectedDate, dateFormat)}
           </span>
           </div>

       </div>

        )
    }
    renderCells(){}
   
    prevDay = () => {
        this.setState({
            currentDay:subDays(this.state.currentDay,1)  
        });
        this.setState({
            selectedDate:subDays(this.state.selectedDate,1)
        })
    }
    nextDay = () => {
        this.setState({
            currentDay:addDays(this.state.currentDay,1)
        })
        this.setState({
            selectedDate:addDays(this.state.selectedDate,1)
        })
    }

    render(){
        return (
            <div>
            
            {this.renderHeader()}
            {this.renderDays()}
            <div className="row">
                <Hour />
            </div>
           
            </div>
        );
    }

}

export default Day;