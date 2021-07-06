package hsco.cmm.security.cipher.sha;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

/**
 * SHA-256 algorithm to encrypt or decrypt the data is the class that provides the ability to.
 * @author devhome.tistory.com
 *
 */
public class Sha256Cipher {

	/**
	 * SHA-256 algorithm to encrypt the data.
	 * @param data Target Data
	 * @param salt Masterkey
	 * @return Encrypted data
	 * @throws UnsupportedEncodingException 
	 */
	public static String encrypt(String data, String salt) throws UnsupportedEncodingException {
		try {
			
			byte[] bSalt = null;
			if( salt != null ) {
				bSalt = salt.getBytes("UTF-8");
			}
			
			byte[] encrypt = MessageDigestEx.encrypt(data.getBytes("UTF-8"), bSalt, "SHA-256");
			
			StringBuffer buff = new StringBuffer();
			for( int i = 0; i < encrypt.length; i++ ) {
				String hex = Integer.toHexString( encrypt[i] & 0xFF ).toUpperCase();
				if( hex.length() == 1 ) {
					buff.append("0");
				}
				buff.append(hex);
			}
			return buff.toString();
			
		} catch(NoSuchAlgorithmException e) {
			// Never
			return null;
		}
	}
	
	public static void main(String args[]) throws UnsupportedEncodingException {
		
		System.out.println( Sha256Cipher.encrypt("2323e2dferg3w4klmf434o", null) );
		System.out.println( Sha256Cipher.encrypt("2323e2dferg3w4klmf434o", "12345678") );
		System.out.println( Sha256Cipher.encrypt("1", "2015") );
		System.out.println( Sha256Cipher.encrypt("hscoadmin", "2015") );
	}
}
