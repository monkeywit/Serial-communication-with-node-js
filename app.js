const { parse } = require('path')
const serialPort = require('serialport')

const port = new serialPort(
    'COM4',
    {baudRate: 9600}
)

const parser = new serialPort.parsers.Readline()

port.pipe(parser)

parser.on('data', (line)=>{
    console.log('Arduino dice: ' + line)
    port.write('Era una vez ')
})