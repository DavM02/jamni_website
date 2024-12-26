import React from 'react'

export default function ReviewStarIcon(props) {
 
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" >
      <path d="M14.0093 1.4952C13.5597 0.720353 12.4407 0.72035 11.9911 1.4952L8.82471 6.95206C8.6026 7.33482 8.21871 7.59603 7.78114 7.66212L1.84711 8.55838C0.850445 8.70891 0.500842 9.96729 1.27703 10.6104L5.69764 14.2728C6.10684 14.6118 6.29924 15.1466 6.19984 15.6686L5.04348 21.7412C4.86068 22.7012 5.86843 23.4471 6.73311 22.9918L12.3207 20.0497C12.746 19.8257 13.2543 19.8257 13.6796 20.0497L19.2673 22.9918C20.132 23.4471 21.1397 22.7012 20.9569 21.7412L19.8005 15.6686C19.7011 15.1466 19.8935 14.6118 20.3027 14.2728L24.7233 10.6104C25.4995 9.9673 25.1499 8.70891 24.1533 8.55838L18.2192 7.66212C17.7817 7.59603 17.3978 7.33482 17.1757 6.95206L14.0093 1.4952Z" fill={props.filled ? 'black' : '#989898'} />
      </svg>
  )
}