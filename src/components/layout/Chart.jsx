import React, { useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Chart = () => {
   const [chart, setChart] = useState(0)
   const { pathname } = useLocation()
   const { t } = useTranslation()

   useLayoutEffect(() => {
      if (pathname === '/contact') {
         setChart(17)
      } else if (pathname === '/summary') {
         setChart(34)
      } else if (pathname === '/skills') {
         setChart(50)
      } else if (pathname === '/experience') {
         setChart(66)
      } else if (pathname === '/education') {
         setChart(83)
      } else if (pathname === '/finish') {
         setChart(100)
      }
   }, [pathname])

   return (
      <ChartStyled>
         <Div chart={chart}>
            <DivItem chart={chart} />
            <Step className="step1">
               <Title>STARTED</Title>
            </Step>
            <Step className="step2">
               <Title>{t('contact')}</Title>
            </Step>
            <Step className="step3">
               <Title>{t('summary')}</Title>
            </Step>
            <Step className="step4">
               <Title>{t('skills')}</Title>
            </Step>
            <Step className="step5">
               <Title>{t('experience')}</Title>
            </Step>
            <Step className="step6">
               <Title>{t('education')}</Title>
            </Step>
            <Step className="step7">
               <Title>{t('finish')}</Title>
            </Step>
         </Div>
      </ChartStyled>
   )
}

const ChartStyled = styled.div`
   height: 4rem;
   padding: 2.6rem 1.6rem 0 1.6rem;
   display: flex;
   justify-content: center;
   border-bottom: 1px solid var(--background);
   background-color: var(--background);
`
const Div = styled.div`
   width: 92%;
   height: 3px;
   border-radius: 20px;
   background-color: var(--background-chart);
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: relative;

   .step1 {
      background-color: ${(props) =>
         props.chart > 0 && props.chart <= 100 ? '#1c2a38' : '#d9d9d9'};
      box-shadow: ${(props) =>
         props.chart > 0 && props.chart <= 100
            ? 'var(--box-shadow-chart)'
            : '#d9d9d9'};
   }
   .step2 {
      box-shadow: ${(props) =>
         props.chart > 17 && props.chart <= 100
            ? 'var(--box-shadow-chart)'
            : '#d9d9d9'};
      background-color: ${(props) =>
         props.chart >= 17 && props.chart <= 100 ? '#1c2a38' : '#d9d9d9'};
   }
   .step3 {
      box-shadow: ${(props) =>
         props.chart > 34 && props.chart <= 100
            ? 'var(--box-shadow-chart)'
            : '#d9d9d9'};
      background-color: ${(props) =>
         props.chart >= 34 && props.chart <= 100 ? '#1c2a38' : '#d9d9d9'};
   }
   .step4 {
      box-shadow: ${(props) =>
         props.chart > 50 && props.chart <= 100
            ? 'var(--box-shadow-chart)'
            : '#d9d9d9'};
      background-color: ${(props) =>
         props.chart >= 50 && props.chart <= 100 ? '#1c2a38' : '#d9d9d9'};
   }
   .step5 {
      box-shadow: ${(props) =>
         props.chart > 66 && props.chart <= 100
            ? 'var(--box-shadow-chart)'
            : '#d9d9d9'};
      background-color: ${(props) =>
         props.chart >= 66 && props.chart <= 100 ? '#1c2a38' : '#d9d9d9'};
   }
   .step6 {
      box-shadow: ${(props) =>
         props.chart > 83 && props.chart <= 100
            ? 'var(--box-shadow-chart)'
            : '#d9d9d9'};
      background-color: ${(props) =>
         props.chart >= 83 && props.chart <= 100 ? '#1c2a38' : '#d9d9d9'};
   }
   .step7 {
      box-shadow: ${(props) =>
         props.chart > 100 && props.chart <= 100
            ? 'var(--box-shadow-chart)'
            : '#d9d9d9'};
      background-color: ${(props) =>
         props.chart === 100 ? '#1c2a38' : '#d9d9d9'};
   }
`
const DivItem = styled.div`
   width: ${({ chart }) => `${chart}%`};
   height: 100%;
   background-color: #1c2a38;
   position: absolute;
   transition: 1s;
   box-shadow: var(--box-shadow-chart);
`
const Step = styled.div`
   width: 16px;
   height: 16px;
   border-radius: 50%;
   background-color: var(--background-chart);
   display: flex;
   justify-content: center;
   position: relative;
   transition: 3s;
`
const Title = styled.h3`
   position: absolute;
   bottom: 25px;
   color: var(--color-title);
   font-family: 'Source Sans Pro', Arial, sans-serif;
   font-size: 15px;
   font-weight: 600;
   letter-spacing: 0.5px;
`

export default Chart
