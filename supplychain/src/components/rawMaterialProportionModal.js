import "../styles/home.css"
const RawMaterialProportionModal = (isVisible,item) =>{
    if(!isVisible){
        return null
    }
    return(
        <div className="modal-overlay">
        <div className="modal">

        </div>
        </div>

    )
}
export default RawMaterialProportionModal