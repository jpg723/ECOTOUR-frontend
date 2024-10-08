import React from 'react'
import * as S from './Recommend.style'
import exampleImage from '../../../assets/example1.png'; // 이미지 파일을 import

function Recommend() {

  const contents = [1, 2, 3, 4, 5];
  return (
    <S.Component>
        {contents.map((content, index) => (
            <S.ContentBox>
                <S.ContentImage src={exampleImage}/>
                <S.ContentName>순천만습지</S.ContentName>
                <S.ContentRegion>전라남도 순천시</S.ContentRegion>
                <S.ScoreContainer>
                    <S.ScoreIcon/>
                    <S.ScoreText>9.6 (100)</S.ScoreText>
                </S.ScoreContainer>
            </S.ContentBox>
        ))}
    </S.Component>
  )
}

export default Recommend