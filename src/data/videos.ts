export interface VideoDemo {
  src: string
  title: string
  text: string
}

export const videos: VideoDemo[] = [
  {
    src: '/video/msp432.mp4',
    title: 'MSP432 Processor with TI RSLK Max Robotic Kit',
    text: "This video demonstrates refelctance sensors used for line following.\nOther labs explore GPIO/FSM control, interrupt-driven bump sensing, PWM motor control, ADC conversion, timer capture and ultrasonic sensor usage.",
  },
  {
    src: '/video/stm32.MP4',
    title: 'STM32F4 board with STM32CubeIDE',
    text: 'This video demonstrates use of accelerometer and gyroscope to capture row and pitch angles on SerialPlot.\nOther labs explore integration of high and low pass filters, complementary filter, and kalman filter.',
  },
]
