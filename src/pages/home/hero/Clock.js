import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
      <h3>Starting In</h3>
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerDays}<br/><small>Days</small></p>
            </section>
            
            <section>
              <p>{timerHours}<br/><small>Hours</small></p>
            </section>{" "}
            
            <section>
              <p>{timerMinutes}<br/><small>Minutes</small></p>
            </section>{" "}
            
            <section>
              <p>{timerSeconds}<br/><small>Seconds</small></p>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;