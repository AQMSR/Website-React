import './servicesDropdown.css'

function servicesDropdown({onServiceClick}){
    return(
        <div className="serviceDropdown-container">
            <ul>
                <li onClick={() => onServiceClick('service1')}>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
            </ul>
        </div>
    )
}

export default servicesDropdown