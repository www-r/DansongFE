# 단송 코리아 (Dansong Korea)

## 🏆 배포
[https://dansongkorea.com](https://dansongkorea.com/)

## ✔️ 깃허브

https://github.com/DANSONGKOREAFE/DansongFE

## 📆 기간

2023.08 - 2023.09

## 👭 인원

FE 2명

## 이번 프로젝트의 목표
- 사이트 리뉴얼 ( 새로운 **디자인**과 **내용** )
- 새로운 도메인 구매 및 변경
- 배포 방식 변경 ( WIX => aws s3 )
- 반응형 사이트 구현 (모바일 + 웹)


## 🛠️ 기술

TypeScript, React, emotion, AWS (S3, Route 53, CloudFront)

### 기술 사용 이유

- AWS : 기존 호스팅 플랫폼(WIX)에서 클라우드 서비스(**AWS**)로 변경함으로서 **고정적 지출을 월 29달러에서 월 10달러 미만까지 절감**했습니다.
    - AWS S3 : 사이트의 내용이 자주 변경되지 않는다는 점을 고려해서 S3를 활용하여 정적 사이트를 만들었습니다.
    - AWS CloudFront : Amazon S3 웹 사이트 엔드포인트는 HTTPS를 지원하지 않아서, HTTPS를 사용을 위해 사용했습니다.

## 📃  담당 파트

- 의뢰인과 팀 간의 소통
- 기존 사이트 리뉴얼의 기획 및 모바일 버전, 웹 버전 디자인 -  [피그마](https://www.figma.com/file/l9722GS7gO9ta0iVNRPBc5/DANSONG?type=design&node-id=0%3A1&mode=design&t=JQpbS32VLb6JyEUX-1)
- 메인 페이지
    - Contents Section
    - Commerce Section
    - Footer
- AWS를 통해 정적 사이트 배포

## ✍️상세 설명

### 메인 페이지

- 사용자들이 유입되는 경로가 모바일 환경에서 더 많을 것 같기 때문에 반응형으로 만들었습니다.
- SEO를 위해 meta 태그와 시멘틱 태그를 최대한 활용했습니다.
- 이후의 관리 편의성을 생각해서, 단위는 px이 아닌 rem으로 통일시켰습니다.
- Flip Card를 라이브러리없이 구현 했습니다.

Before

![](https://bleyetciwkirndgevlln.supabase.co/storage/v1/object/sign/images/dansongbefore.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZGFuc29uZ2JlZm9yZS5wbmciLCJpYXQiOjE3MDcwMjcwNzUsImV4cCI6MTczODU2MzA3NX0.VFGM4FQfaVNk2qZKIVkEpgRpLbQXFcEWmx9Hle4a5e8&t=2024-02-04T06%3A11%3A16.030Z)

After

![dansongKoreaImg.gif](https://bleyetciwkirndgevlln.supabase.co/storage/v1/object/sign/images/dansongKoreaImg.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZGFuc29uZ0tvcmVhSW1nLmdpZiIsImlhdCI6MTcwNzAyNzE5OSwiZXhwIjoxNzM4NTYzMTk5fQ.HzeLfgNpOlPwxmjrDHqOtAFvPRD6d8dRsJ72PVODTUY&t=2024-02-04T06%3A13%3A19.994Z)

### 컨택트 페이지

- 국내에 사용자가 치중되어있음을 고려해서 지도를 구글맵에서 카카오 지도로 변경하였습니다.

Before

![](https://bleyetciwkirndgevlln.supabase.co/storage/v1/object/sign/images/dansongbefore-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZGFuc29uZ2JlZm9yZS0xLnBuZyIsImlhdCI6MTcwNzAyNzA5NywiZXhwIjoxNzM4NTYzMDk3fQ.RQwuw0XKIRnyPPQFm6hjB7Gx-TFqrhBCiQUceRzvNNA&t=2024-02-04T06%3A11%3A37.759Z)

After

![dansong-contact.png](https://bleyetciwkirndgevlln.supabase.co/storage/v1/object/sign/images/dansong-contact.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZGFuc29uZy1jb250YWN0LnBuZyIsImlhdCI6MTcwNzAyNzE3NSwiZXhwIjoxNzM4NTYzMTc1fQ.JJAh6oNiETc38mbOoNQU3jUvP1ySejuy0Fzdco_JVZI&t=2024-02-04T06%3A12%3A55.568Z)

### AWS

- Amazon S3를 사용하여 정적 사이트를 웹 호스팅했습니다.
- Amazon Route 53을 사용하여 도메인 등록, DNS 라우팅을 했습니다.
- HTTPS를 사용을 위해 Amazon CloudFront를 사용했습니다.

## ✨프로젝트를 통해 배운/깨달은 것들

- 직접 도메인을 구매하고 세팅하면서 호스팅과 관련된 개념들을 이해할 수 있었습니다. 또한 배포가 진행되는 방식도 알 수 있었습니다.
- 네트워크와 관련된 지식들을 공부할 수 있었습니다.


