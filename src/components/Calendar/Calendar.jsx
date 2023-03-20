import { useState, useEffect } from 'react';
import {
  dateChooseData,
  convertMounth,
} from 'components/Calendar/calendarHelpers/calendarHelpers';
import {
  DateBox,
  DateValue,
  CalendarIcon,
  CalendarBtn,
  ChooseDateBox,
  ChooseDateBoxList,
  ChooseDateBoxListHiddenElement,
  ChooseDateBoxListItem,
} from './Calendar.styled';

export const Calendar = ({
  date,
  transaction,
  setTransaction,
  request,
  setIsCalendarModalOpen,
}) => {
  const [dateChoose, setDateChoose] = useState({
    day: date().render.day,
    mounth: date().render.mounth,
    year: date().render.year,
    isModalOpen: false,
    changeData: false,
    newDate: { day: '', mounth: '', year: '', finish: null },
  });

  function reduceToYear() {
    let year = new Date().getFullYear();
    return Array.from(
      { length: year - (year - 6) },
      (_, i) => year - 6 + 1 + i
    );
  }

  function chooseDay() {
    // eslint-disable-next-line
    Date.prototype.daysInMonth = function () {
      return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
    };
    let value = new Date().daysInMonth();
    const arr = [...Array(value)].reduce((acc, _, i) => {
      const num = i < 31 && i + 1;
      acc.push(Number(num));
      return acc;
    }, []);
    return arr;
  }

  useEffect(() => {
    if (
      dateChoose.day !== '' &&
      dateChoose.mounth !== '' &&
      dateChoose.year !== '' &&
      dateChoose.isModalOpen
    ) {
      setDateChoose({
        ...dateChoose,
        isModalOpen: false,
        changeData: true,
      });
    }
    // eslint-disable-next-line
  }, [dateChoose.day, dateChoose.mounth, dateChoose.year]);

  useEffect(() => {
    const { day, mounth, year } = dateChoose.newDate;
    const repairDay = parseInt(day) + 1;
    if (day !== '' && mounth !== '' && year !== '') {
      const newDate = new Date(`${mounth} ${repairDay}, ${year}`);
      setDateChoose({
        ...dateChoose,
        newDate: {
          ...dateChoose.newDate,
          finish: newDate.toISOString(),
        },
      });
    }
    // eslint-disable-next-line
  }, [
    dateChoose.newDate.day,
    dateChoose.newDate.mounth,
    dateChoose.newDate.year,
  ]);

  useEffect(() => {
    if (dateChoose.newDate.finish !== null) {
      setTransaction({
        ...transaction,
        request: {
          ...transaction.request,
          transactionDate: dateChoose.newDate.finish,
        },
      });
    }
    // eslint-disable-next-line
  }, [dateChoose.newDate.finish]);

  const handleChooseDateModalOpen = e => {
    e.preventDefault();
    setDateChoose({
      ...dateChoose,
      day: '',
      mounth: '',
      year: '',
      isModalOpen: !dateChoose.isModalOpen,
    });
    setIsCalendarModalOpen(true);
  };

  console.log(transaction.category);

  return (
    <DateBox
      onMouseLeave={() => {
        if (
          (dateChoose.day !== '',
          dateChoose.mounth !== '' && dateChoose.year !== '')
        ) {
          setDateChoose({ ...dateChoose, isModalOpen: false });
        }
      }}
    >
      <DateValue>
        {dateChoose.day}.{dateChoose.mounth}.{dateChoose.year}
      </DateValue>
      {dateChoose.isModalOpen ? (
        <CalendarBtn
          onClick={e => {
            if (transaction.category === 'onChange') {
              return;
            }
            setIsCalendarModalOpen(false);
            e.preventDefault();
            setTransaction({
              ...transaction,
              request: {
                ...transaction.request,
                transactionDate: date().response,
              },
            });
            setDateChoose({
              ...dateChoose,
              day: date().render.day,
              mounth: date().render.mounth,
              year: date().render.year,
              newDate: { ...dateChoose.newDate, finish: null },
            });
          }}
        >
          <CalendarIcon />
        </CalendarBtn>
      ) : (
        <CalendarBtn onClick={handleChooseDateModalOpen}>
          <CalendarIcon />
        </CalendarBtn>
      )}

      {dateChoose.isModalOpen && (
        <ChooseDateBox>
          <div style={{ position: 'relative', width: '100%' }}>
            <ChooseDateBoxList>
              {chooseDay().map(item => {
                return (
                  <ChooseDateBoxListItem key={item}>
                    <p
                      onClick={e => {
                        e.preventDefault();
                        if (Number(e.target.innerText) < 10) {
                          setDateChoose({
                            ...dateChoose,
                            day: `0${e.target.innerText}`,
                            newDate: {
                              ...dateChoose.newDate,
                              day: `0${e.target.innerText}`,
                            },
                          });
                        } else {
                          setDateChoose({
                            ...dateChoose,
                            day: e.target.innerText,
                            newDate: {
                              ...dateChoose.newDate,
                              day: e.target.innerText,
                            },
                          });
                        }

                        console.log(e.target.innerText);
                      }}
                    >
                      {item}
                    </p>
                  </ChooseDateBoxListItem>
                );
              })}
            </ChooseDateBoxList>
            <ChooseDateBoxListHiddenElement></ChooseDateBoxListHiddenElement>
          </div>
          <div style={{ position: 'relative', width: '100%' }}>
            <ChooseDateBoxList>
              {dateChooseData.mounth.map(item => {
                return (
                  <ChooseDateBoxListItem key={item}>
                    <p
                      onClick={e => {
                        e.preventDefault();
                        convertMounth(e);
                        setDateChoose({
                          ...dateChoose,
                          mounth: convertMounth(e),
                          newDate: {
                            ...dateChoose.newDate,
                            mounth: e.target.innerText,
                          },
                        });
                      }}
                    >
                      {item}
                    </p>
                  </ChooseDateBoxListItem>
                );
              })}
            </ChooseDateBoxList>
            <ChooseDateBoxListHiddenElement></ChooseDateBoxListHiddenElement>
          </div>
          <div style={{ position: 'relative', width: '100%' }}>
            <ChooseDateBoxList>
              {reduceToYear().map(item => {
                return (
                  <ChooseDateBoxListItem key={item}>
                    <p
                      onClick={e => {
                        e.preventDefault();
                        const year = new Date();
                        if (e.target.innerText > year.getFullYear()) {
                          console.log('year in features');
                          return;
                        } else {
                          setDateChoose({
                            ...dateChoose,
                            year: Number(e.target.innerText),
                            newDate: {
                              ...dateChoose.newDate,
                              year: e.target.innerText,
                            },
                          });
                        }
                      }}
                    >
                      {item}
                    </p>
                  </ChooseDateBoxListItem>
                );
              })}
            </ChooseDateBoxList>
          </div>
        </ChooseDateBox>
      )}
    </DateBox>
  );
};
