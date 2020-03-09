
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { DraftHeader,Container,SaveDraftButton,NextStepButton,Input,Form,Buttons } from './DraftAnArticle';
import { H2,H3 } from '../styledComponents/fontStyles';
import styled from 'styled-components';
import { colors } from '../styledComponents/variables';



export const Text = styled.textarea`
    border-radius: 16px;
    border: none;
    width: 343px;
    height: 50px;
    font-size: 22px;
    margin-bottom: 52px;
`
const PublishButton = styled.button`
    background: #FDBA77;
    border-radius: 36.5px;
    font-size: 28px;
    font-family: "Martel";
    font-size: 28px;
    line-height: 32px;
    font-weight: 600;
    color: ${colors.background1};
`

const PreviousButton = styled.button`
    background: #36827E;
    border-radius: 36.5px;
    font-size: 28px;
    font-family: "Martel";
    font-size: 28px;
    line-height: 32px;
    font-weight: 600;
    color: ${colors.background1};
`

const Step = (props) => {
    // console.log(props)
    
    const { register, handleSubmit, setValue, errors } = useForm()
    const id = Number(props.match.params.id) 
    const submit = (data) => {
        data.step_number = id - 1
        data.how_to_id = props.howtoid
        console.log(data)
        axiosWithAuth()
            .post('how-to/instructions',data)
            .then(Response => {
                console.log(Response)
                props.history.push(`/Step/${id + 1}`)
            })
            .catch(error => {
                console.log(error)
            })

        setValue('step_title','')
        setValue('description','')
        
        
        
    }
    
     const renderPreviousStep = () => {
        if (id > 1) {
            return <Link to={`/Step/${id - 1}`}><PreviousButton>previous step</PreviousButton></Link>
        }
    }
    
    
    return (
        <div>
            <Container>
                <DraftHeader><H2>draft an article</H2></DraftHeader>
                <H2>step {id}</H2>
                <Form onSubmit={handleSubmit(submit)}>
                    <label><H3>title</H3></label>
                    <Input type='text' name='step_title' ref={register({required: true})}></Input>
                    {errors.step_title && <p>TITLE REQUIRED</p>}
                    <label><H3>description</H3></label>
                    <Text type='text' name='description' ref={register({required: true})}></Text>
                    {errors.description && <p>DESCRIPTION REQUIRED</p>}
                    <Buttons>
                        <NextStepButton type='submit'>next step</NextStepButton>
                        {renderPreviousStep()}
                        <SaveDraftButton>save draft</SaveDraftButton>
                    </Buttons>
                    <PublishButton type='button' onClick={() => props.history.push(`/how-to/${props.howtoid}`)}>publish</PublishButton>
                </Form>
            </Container>
          
            
        </div>
    );
}

export default Step;

