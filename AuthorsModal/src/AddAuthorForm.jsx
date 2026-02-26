import { useState } from 'react';
import './AddAuthorForm.css';

function AddAuthorForm({ onClose }) {
  const [authorName, setAuthorName] = useState('');
  const [category, setCategory] = useState('Писатели');
  const [works, setWorks] = useState('');

  const isFormValid = authorName.trim() !== '' && category !== ''

  const handleSubmit = () => {
    if (isFormValid) {
      onClose();
    }
  }

  return (
    <div className="modal-author" onClick={ onClose }>
      <div className="add-author-container" onClick={ (e) => e.stopPropagation() }>
        <div className="add-author-wrapper">
          <h2 className="add-author-title">Добавить автора</h2>
          
          <div className="input-fields-row">
            <div className="input-field-wrapper">
              <label className="input-label">ФИО автора*</label>
              <input
                type="text"
                className="input-field"
                placeholder="Введите ФИО автора"
                value={authorName}
                onChange={ (e) => setAuthorName(e.target.value) }
              />
            </div>

            <div className="input-field-wrapper">
              <label className="input-label">Категория*</label>
              <div className="category-select-wrapper">
                <select 
                  className="category-select"
                  value={ category }
                  onChange={ (e) => setCategory(e.target.value) }
                >
                  <option value="Писатели">Писатели</option>
                  <option value="Композиторы">Композиторы</option>
                  <option value="Художники">Художники</option>
                </select>
                <div className="category-icons">
                  <div className="category-icon category-icon-close"></div>
                  <div className="category-icon category-icon-select"></div>
                </div>
              </div>
            </div>

            <div className="input-field-wrapper">
              <label className="input-label">Примеры произведений</label>
              <input
                type="text"
                className="input-field"
                placeholder="Введите примеры произведений"
                value={ works }
                onChange={ (e) => setWorks(e.target.value) }
              />
            </div>
          </div>

          <div className="form-actions">
            <button 
              className={ `btn-submit ${!isFormValid ? 'btn-disabled' : '' }` }
              onClick={ handleSubmit }
              disabled={ !isFormValid }
            >
              Добавить
            </button>
            <button className="btn-cancel" onClick={ onClose }>
              Отменить
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddAuthorForm;
