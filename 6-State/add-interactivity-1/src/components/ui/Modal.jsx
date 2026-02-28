import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Modal({ title, isOpen, onClose, children }) {
    function handleOverlayMouseDown(e) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className='modal-wrapper' onMouseDown={handleOverlayMouseDown}>
            <div className='modal-wrapper-inner'>
                {title && (
                    <h3 className='modal-title'>
                        {title}
                        <button className='modal-close-button' onClick={onClose}>
                            <XMarkIcon className='w-8 h-8' />
                        </button>
                    </h3>
                )}
                <div className='modal-inner'>{children}</div>
            </div>
        </div>
    );
}
