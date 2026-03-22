import { XMarkIcon } from '@heroicons/react/20/solid';
import { useRef } from 'react';
import useModal from '../../hooks/useModal';

export default function Modal({ title, isOpen, onClose, children }) {
    const modalRef = useRef(null);
    useModal(modalRef, onClose, isOpen);

    return (
        isOpen && (
            <div className='modal-wrapper'>
                <div className='modal-wrapper-inner' ref={modalRef}>
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
        )
    );
}
