import './servicesDropdown.css'

function ServicesDropdown({onServiceClick}){
    
    return(
        <div className="serviceDropdown-container">
            <ul>
                <li onClick={() => {
                    onServiceClick('service1')}}>Service 1</li>
                <li onClick={() => {onServiceClick('service2')}}>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
            </ul>
        </div>
    )
}

export default ServicesDropdown