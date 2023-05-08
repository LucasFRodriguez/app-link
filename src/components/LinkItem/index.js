import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi';



export default function LinkItem(){
    return(
        <div className='modal-container'>
            
            <div className='modal-header'>
                <h2>Link Encurtado</h2>
                <button>
                    <FiX size={28} color="#000" />
                </button>
            </div>

            <span>
                sadasddsadasdasdasdasdasd
            </span>

            <button className="modal-link">
                saddddddddddddddddddddasdasdasd
                <FiClipboard size={20} color="#FFF"/>
            </button>

        </div>
    )
}