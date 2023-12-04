# onlineClothingStore

Макет: https://www.figma.com/file/TQaPa1gzsX6Qb4Gqj4fve7/Shop-(Copy)?node-id=0%3A1&mode=dev


header .container {
    max-width: 1140px;
    margin: 16px 18px;

    @media (min-width: 768px) {
      margin: 18px 32px;
    }

    @media (min-width: 1600px) {
      margin: 18px auto;
      width: 1140px;
    }
  }

  .mainSection .container {
  margin: 0 auto;
  max-width: 1140px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 245px) 110px;
  align-content: center;
  justify-content: center;
  justify-items: center;
  gap: 32px;
  padding: 64px 16px;

  .featuredWrap .container {
  max-width: 1140px;
  padding-left: 8px;
  padding-right: 8px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .advantageWrap {
  background: #222224;

  .container {
    max-width: 1140px;
    padding-left: 8px;
    padding-right: 8px;


просто определение контейнера
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1599px) {
    width: 100%;
  }

  @media (min-width: 1600px) {
    .container {
      width: 1140px;
      margin: 0 auto;
    }
  }
}