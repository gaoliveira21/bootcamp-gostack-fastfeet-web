import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdImage } from 'react-icons/md';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container } from './styles';

function AvatarInput({ name, avatarId }) {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField, name]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('files', e.target.files[0]);

    const response = await api.post('/files', data);

    const { id, url } = response.data;

    avatarId(id);
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="Avatar" />
        ) : (
          <>
            <MdImage size={74} color="#DDDDDD" />
            <span>Adicionar foto</span>
          </>
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  name: PropTypes.string.isRequired,
  avatarId: PropTypes.func.isRequired,
};

export default AvatarInput;
