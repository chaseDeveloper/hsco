package hsco.cmm.security.cipher.seed;

import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;

import hsco.cmm.security.cipher.base64.Base64;


/**
 * SEED algorithm to encrypt or decrypt the data is the class that provides the ability to.
 * @author devhome.tistory.com
 *
 */
public class Seed128Cipher {
	// 
	private static byte[] getPaddedByte(byte[] data, int blockLenth)	
	{		
		if (blockLenth == 0) blockLenth = 16;   
		
		int addingBlockSize = 0;
		if( data.length % blockLenth  != 0 )
		    addingBlockSize = blockLenth - (data.length % blockLenth);  
		
		//System.out.print(addingBlockSize);
		
		// 블럭사이즈 만큼 늘어난 배열 생성
		byte r[] = new byte[data.length + addingBlockSize];
		
		// 원본 바이트 배열을 늘어난 배열에 복사        
		System.arraycopy(data, 0, r, 0, data.length);
		
		//System.out.print(r.length);
		return r;
	}

	// 암호화
	public static String encrypt(String data) throws UnsupportedEncodingException, InvalidKeyException {
		int pdwRoundKey[] = new int[32];
		byte pbUserKey[]= {(byte)0x00, (byte)0x01, (byte)0x02, (byte)0x03, (byte)0x04, (byte)0x05, (byte)0x06, (byte)0x07,
		                   (byte)0x08, (byte)0x09, (byte)0x0A, (byte)0x0B, (byte)0x0C, (byte)0x0D, (byte)0x0E, (byte)0x0F};
		
		byte _pbData[] = data.getBytes("utf-8");		
		byte pbData[] = getPaddedByte(_pbData, 16);
	
		// Derive roundkeys from user secret key
		SEED128.SeedRoundKey(pdwRoundKey, pbUserKey);	

		byte encryptText[]   = new byte[pbData.length];
		SEED128.Encrypt(pbData, pdwRoundKey, encryptText);	
		
		return Base64.toString(encryptText);
	}
	// 복호화
	public static String decrypt(String data) throws UnsupportedEncodingException, InvalidKeyException {
		int pdwRoundKey[] = new int[32];
		byte pbUserKey[]= {(byte)0x00, (byte)0x01, (byte)0x02, (byte)0x03, (byte)0x04, (byte)0x05, (byte)0x06, (byte)0x07,
                (byte)0x08, (byte)0x09, (byte)0x0A, (byte)0x0B, (byte)0x0C, (byte)0x0D, (byte)0x0E, (byte)0x0F};
		
		byte pbData[] = Base64.toByte(data);
		
		// Derive roundkeys from user secret key
		SEED128.SeedRoundKey(pdwRoundKey, pbUserKey);
		
		byte decryptText[]   = new byte[pbData.length];
		SEED128.Decrypt(pbData, pdwRoundKey, decryptText);
		
		return new String(decryptText, "utf-8");
	}

	public static void main(String[] args) 
	{
		// Round keys for encryption or decryption
		int pdwRoundKey[] = new int[32];
		// User secret key
		byte pbUserKey[]= {(byte)0x00, (byte)0x01, (byte)0x02, (byte)0x03, (byte)0x04, (byte)0x05, (byte)0x06, (byte)0x07,
		                   (byte)0x08, (byte)0x09, (byte)0x0A, (byte)0x0B, (byte)0x0C, (byte)0x0D, (byte)0x0E, (byte)0x0F};

			
		//System.out.print("[ Test SEED reference code ]"+"\n");
		//System.out.print("\n\n");

		
		String data = "한글AASDFASG0000";		
		//System.out.print("Test String:"+data+"\n");
		//System.out.print("\n\n");
		
		try 
		{
			byte _pbData[] = data.getBytes("utf-8");		
			byte pbData[] = getPaddedByte(_pbData, 16);
		
			// Derive roundkeys from user secret key
			SEED128.SeedRoundKey(pdwRoundKey, pbUserKey);		
//			System.out.print("RoundKey\t: ");
			for (int i=0; i<pdwRoundKey.length; i++)	System.out.print(Integer.toHexString(0xff&pdwRoundKey[i])+" ");
//			System.out.print("\n\n");

			byte encryptText[]   = new byte[pbData.length];
			SEED128.Encrypt(pbData, pdwRoundKey, encryptText);
		
		
//			System.out.print("[ Test Encrypt mode ]"+"\n");
//			System.out.print("Key\t\t: ");
			for (int i=0; i<16; i++)	System.out.print(Integer.toHexString(0xff&pbUserKey[i])+" ");
//			System.out.print("\n");
//			System.out.print("Plaintext\t: ");
			for (int i=0; i<pbData.length; i++)	System.out.print(Integer.toHexString(0xff&pbData[i])+" ");
//			System.out.print("\n");
//			System.out.print("EncryptText("+encryptText.length+")\t: ");
			for (int i=0; i<encryptText.length; i++)	System.out.print(Integer.toHexString(0xff&encryptText[i])+" ");
//			System.out.print("\n");
//			System.out.println("encryptText : " + encryptText);			
//			System.out.println("encryptText : " + Base64.toString(encryptText));			
//			System.out.println("NEW encryptText ===========> " + encrypt(data));			
//			System.out.print("\n\n");

	  
			// Decryption
			//byte pbPlain[]    = new byte[pbData.length];
			//SEED128.SeedDecrypt(pbCipher, pdwRoundKey, pbPlain);
			byte decryptText[]   = new byte[pbData.length];
			SEED128.Decrypt(encryptText, pdwRoundKey, decryptText);
		
		
//			System.out.print("[ Test Decrypt mode ]"+"\n");
//			System.out.print("Key\t\t: ");
			for (int i=0; i<16; i++)	System.out.print(Integer.toHexString(0xff&pbUserKey[i])+" ");
//			System.out.print("\n");
//			System.out.print("EncryptText("+encryptText.length+")\t: ");
			for (int i=0; i<encryptText.length; i++)	System.out.print(Integer.toHexString(0xff&encryptText[i])+" ");
//			System.out.print("\n");
//			System.out.print("DecryptText("+decryptText.length+")\t: ");
			for (int i=0; i<decryptText.length; i++)	System.out.print(Integer.toHexString(0xff&decryptText[i])+" ");
//			System.out.print("\n");
//			System.out.println("decryptText : " + new String(decryptText, "utf-8"));
//			System.out.println("NEW decryptText ===========> " + decrypt(Base64.toString(encryptText)));			
//			System.out.print("\n\n");
		} catch(RuntimeException re)	{
		    re.printStackTrace(System.err);
		} catch(Exception ex)	{
			ex.printStackTrace(System.err);
		}
	}		
}
