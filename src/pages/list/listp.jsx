import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatablep from "../../components/datatable/Datatablep"
// import Datatablep from "../../components/datatable/Datatablep"


const Listp = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>       
        <Datatablep/>

      </div>
    </div>
  )
}

export default Listp