import React from 'react'
import { HorizontalBar} from 'react-chartjs-2';
const circles = () => {
    return (
      <div>
        <HorizontalBar
          height={400}
          width={600}
          data={{
            labels: [
              'Jan',
              'Feb',
              'Much',
              'Apl',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sept',
              'Oct',
              'Nov',
              'Dec',
            ],
            datasets: [
              {
                label: '# found data',
                data: [12, 23, 30, 10, 37, 29, 50, 10, 5, 21, 31, 24],
                backgroundColor: [
                  'rgb(200, 185, 20)',
                  'rgb(200, 120, 50)',
                  'rgb(200, 185, 20)',
                  'rgb(200, 120, 50)',
                  'rgb(200, 185, 20)',
                  'rgb(200, 120, 50)',
                  'rgb(200, 185, 20)',
                  'rgb(200, 120, 50)',
                  'rgb(200, 185, 20)',
                  'rgb(200, 120, 50)',
                  'rgb(200, 185, 20)',
                  'rgb(200, 120, 50)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
}

export default circles
