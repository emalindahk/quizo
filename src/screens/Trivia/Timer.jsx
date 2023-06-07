import React from 'react'

function Timer() {
    const [time, setTime] = React.useState(15)

    const timer = setInterval(() => {
        setTime(time - 1);
    }, 1000);

    React.useEffect(() => {
        if (time === 0) {
            clearInterval(timer);
        }
    }, [time, timer])

  return (
    <div>
        {time}
    </div>
  )
}

export default Timer