import React, {ChangeEvent, useState} from 'react';
import {Button, Container, Currentitem, Select, SimpleWrapper, SomeItem, Wrapper} from '../../common/Styled';

type paginatorPropsType = {
  totalCount: number
  currentPage: number
  changePageHandler: (value: number) => void
  changePerPageHandler: (value: number) => void
}

export const Paginator: React.FC<paginatorPropsType> = React.memo(({
                                                                     currentPage,
                                                                     totalCount,
                                                                     changePageHandler,
                                                                     changePerPageHandler
                                                                   }) => {

    const valuesPerPage = [5, 10, 20];

    const [perPageValue, setPerPageValue] = useState<number>(5);

    changePerPageHandler(perPageValue);

    const totalPagesCount = Math.ceil(totalCount / perPageValue);

    if (currentPage > totalPagesCount) {
      changePageHandler(1);
    }

    const nextPage = () => {
      if (currentPage === totalPagesCount) return;
      changePageHandler(currentPage + 1);
    };

    const prevPage = () => {
      if (currentPage === 1) return;
      changePageHandler(currentPage - 1);
    };

    const endPage = () => {
      changePageHandler(totalPagesCount);
    };

    const startPage = () => {
      changePageHandler(1);
    };

    const perPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
      if (currentPage > Math.ceil(totalCount / +e.currentTarget.value)) {
        changePageHandler(Math.ceil(totalCount / +e.currentTarget.value));
      }
      setPerPageValue(+e.currentTarget.value);
      changePerPageHandler(+e.currentTarget.value);
    };


    return (
      <Wrapper>
        <Container style={{textAlign: 'center'}}>

          <SimpleWrapper>
            {currentPage > 2
              ? <Button onClick={startPage}>{'<<'}</Button>
              : null}

            {currentPage > 1
              ? <Button onClick={prevPage}>{'<'}</Button>
              : null}
          </SimpleWrapper>

          <SimpleWrapper>
            {currentPage === totalPagesCount && totalPagesCount > 2
              ? <SomeItem>{currentPage - 2}</SomeItem>
              : null}

            {totalPagesCount === 1 || currentPage === 1
              ? null
              : <SomeItem>{currentPage - 1}</SomeItem>}

            {totalPagesCount === 1
              ? null
              : <Currentitem>{currentPage}</Currentitem>}

            {totalPagesCount === 0 || currentPage === totalPagesCount
              ? null
              : <SomeItem>{currentPage + 1}</SomeItem>}

            {currentPage === 1 && totalPagesCount > 2
              ? <SomeItem>{currentPage + 2}</SomeItem>
              : null}
          </SimpleWrapper>

          <SimpleWrapper>
            {totalPagesCount === 0 || currentPage === totalPagesCount
              ? null
              : <Button onClick={nextPage}>{'>'}</Button>}

            {currentPage !== totalPagesCount && totalPagesCount > 2
              ? <Button onClick={endPage}>{'>>'}</Button>
              : null}
          </SimpleWrapper>

          <SimpleWrapper><span>total {totalPagesCount} pg</span></SimpleWrapper>

          <SimpleWrapper>
            <Select defaultValue={perPageValue} onChange={perPageChange}>
              {valuesPerPage.map((i, index) => {
                return <option value={i} key={index}>{i}</option>;
              })}
            </Select>
          </SimpleWrapper>
        </Container>
      </Wrapper>
    );
  }
);