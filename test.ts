import {builder} from "cleandi";

type P = {
    msg: string;
}
const provider = builder<P>()
    .bindValue('msg', 'hello world!')
    .build('msg');

const isOk = provider.msg === 'hello world!';
if (isOk)
    process.exit(0)
else
    process.exit(1);

export default {};