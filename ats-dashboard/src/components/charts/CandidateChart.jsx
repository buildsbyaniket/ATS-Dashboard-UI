import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Selected',
    value: 45,
  },
  {
    name: 'Interview',
    value: 30,
  },
  {
    name: 'Rejected',
    value: 20,
  },
]

const COLORS = [
  '#2563eb',
  '#f59e0b',
  '#ef4444',
]

function CandidateChart() {
  return (
    <div
      className='
      bg-[#0f172a]
      border
      border-slate-800
      rounded-3xl
      p-6
      h-[450px]
    '
    >
      <h2
        className='
        text-2xl
        font-bold
        text-white
        mb-6
      '
      >
        Candidate Status Overview
      </h2>

      <ResponsiveContainer
        width='100%'
        height='100%'
      >
        <PieChart>
          <Pie
            data={data}
            dataKey='value'
            outerRadius={140}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CandidateChart