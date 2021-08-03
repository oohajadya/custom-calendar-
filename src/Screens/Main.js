import React from 'react'
import { Row, Col } from "react-bootstrap"
import Navigation from "../components/Navigation"
import Week from '../components/Week'
import Year from '../components/Year'
import Month from '../components/Month'
import Day from '../components/Day'

const Main = () => {
    const [selectedView, setSelectedView] = React.useState("month")
   
    return (
        <div>
            <Navigation selectedViews={setSelectedView} />
            <Row>
                <Col className="views">
                    {
 selectedView && selectedView === "week" ? (<Week  />)
                            :
selectedView && selectedView === "year" ? (<Year  />)
                                :
 selectedView && selectedView === "month" ? (<Month  />)
  : 
 selectedView && selectedView ==="day"? (<Day  />)
 :
 <h1>No views selected</h1>
}
                    
                </Col>
            </Row>
        </div>
    )


}
export default Main
