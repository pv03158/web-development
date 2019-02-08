/******************************************************************************
Author : Prashant Varshney
License : OpenSource
Description : Provides Methods to Apply Vigenere Cipher on ASCII chararcter 
charset : utf-16
******************************************************************************/
var cipher={
	key : "",
	rawText : "",
	encText : "",
	decText : "",
	getKey : function(rawKey){
		for(var i = 0; i < rawKey.length; i++)
			this.key += rawKey.charCodeAt(i);
	},
	getRawText : function(rawText){
		this.rawText = rawText;
	},
	encrypt : function(){
		var pos = 0;
		keylength = this.key.length;
		for(var i = 0; i < this.rawText.length; i++){
			this.encText += String.fromCharCode(
				this.rawText.charCodeAt(i) + this.key.charCodeAt(pos % keylength));
			pos += 1;
		}
	},
	decrypt : function(){
		var pos = 0;
		keylength = this.key.length;
		for(var i = 0; i < this.encText.length; i++){
			this.decText += String.fromCharCode(
				this.encText.charCodeAt(i) - this.key.charCodeAt(pos % keylength));
			pos += 1;
		}
	}
};s