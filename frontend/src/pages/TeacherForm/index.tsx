import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrivel que você quer dar aula."
        description="O primeiro passo é preencher o formulario de inscrição"
        />

        <main>
          <fieldset>
            <legend>Seus dados</legend>
            <Input name="name" label="Nome completo"/>
            <Input name="avatar" label="Avatar"/>
            <Input name="whatsapp" label="whatsapp"/>
            <Textarea name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select 
              name="subject"
              label="Materia"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Ciencia', label: 'Ciencia' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Educação fisica', label: 'Educação fisica' },
                { value: 'Matematica', label: 'Matematica' },
                { value: 'hitoria', label: 'Artes' }
              ]} 
              />
            <Input name="cost" label="Custo da sua hora por aula"/>
          </fieldset>

          <fieldset>
            <legend>Horarios disponiveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horario
              </button>
            </legend>

            {scheduleItems.map(scheduleItem => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="week_day"
                    label="Dia da semana"
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sabado' },
                    ]} 
                  />
                  <Input name="from" label="Das" type="time" />
                  <Input name="to" label="Ate" type="time" />
            </div>
              )
            })}
            
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="button">Salvar cadastro</button>
          </footer>
        </main>
    </div>
  )
}

export default TeacherForm;