
import {NativeModules} from 'react-native';
const Iota = NativeModules.Iota

export default class IotaUtils {
    testHash():String {
        let result :String = Iota.bytesToHexString(Iota.sha256('Hello World'));
        return result;  
    }

    generateHash(input: String): String {
        let result : String = Iota.bytesToHexString(Iota.sha256(input));
        return result;  
    }
}