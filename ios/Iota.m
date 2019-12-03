#import "Iota.h"


@implementation Iota

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(sampleMethod:(NSString *)stringArgument numberParameter:(nonnull NSNumber *)numberArgument callback:(RCTResponseSenderBlock)callback)
{
    // TODO: Implement some actually useful functionality
    callback(@[[NSString stringWithFormat: @"numberArgument: %@ stringArgument: %@", numberArgument, stringArgument]]);
}

RCT_EXPORT_METHOD(bytesToHexString:(NSData*)data)
{
     NSMutableData *result = [NSMutableData dataWithLength:2*data.length];
     unsigned const char* src = data.bytes;
     unsigned char* dst = result.mutableBytes;
     unsigned char t0, t1;

     for (int i = 0; i < data.length; i ++ ) {
          t0 = src[i] >> 4;
          t1 = src[i] & 0x0F;

          dst[i*2] = 48 + t0 + (t0 / 10) * 39;
          dst[i*2+1] = 48 + t1 + (t1 / 10) * 39;
     }

     return [[NSString alloc] initWithData:result encoding:NSASCIIStringEncoding];
}

RCT_EXPORT_METHOD(sha256:(NSData *)data )
{

NSMutableData *out = [NSMutableData dataWithLength:CC_SHA256_DIGEST_LENGTH];

CC_SHA256(data.bytes, data.length,  out.mutableBytes);

if ( CC_SHA256(data.bytes, data.length, out.mutableBytes) ) return out;

return nil;
}

@end
