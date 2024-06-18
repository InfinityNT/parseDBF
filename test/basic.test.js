import fs from 'fs';
import * as basic from './data/watershed.cjs'
import * as char11 from './data/watershed-11chars.cjs'
import * as specialChar from './data/watershed-specialCharacters.cjs'
var utf = [
  {
    field: '💩'
  },
  {
    field: 'Hněvošický háj'
  }
]

import dbf from '../index.js'
import pkg from 'chai';
const should = pkg.should();

describe('dbf',function(){
	it('should work',function(done){
		fs.readFile('./test/data/watershed.dbf',function(err,data){
			if(err){
				return done(err);
			}
			dbf(data).should.deep.equal(basic);
			done();
		});
	});
  it('should handle 11 character field names',function(done){
		fs.readFile('./test/data/watershed-11chars.dbf',function(err,data){
			if(err){
				return done(err);
			}
			dbf(data).should.deep.equal(char11);
			done();
		});
	});
  it('should handle special characters',function(done){
    fs.readFile('./test/data/watershed-specialCharacters.dbf',function(err,data){
      if(err){
        return done(err);
      }
      dbf(data).should.deep.equal(specialChar);
      done();
    });
  });
  it('should handle an empty / null dbf file',function(done){
    fs.readFile('./test/data/empty.dbf',function(err,data){
      if(err){
        return done(err);
      }
      dbf(data).should.deep.equal([{}, {}]);
      done();
    });
  });
  it('should handle utf charicters',function(done){
    fs.readFile('./test/data/utf.dbf',function(err,data){
      if(err){
        return done(err);
      }
      dbf(data).should.deep.equal(utf);
      dbf(data, 'UTF-8').should.deep.equal(utf);
      done();
    });
  });
  it('should handle utf charicters and a stupid formatting',function(done){
    fs.readFile('./test/data/utf.dbf',function(err,data){
      if(err){
        return done(err);
      }
      fs.readFile('./test/data/page.html', 'utf8',function(err,data2){
        dbf(data, data2).should.deep.equal(utf);
        done();
      })
    });
  });
  it('should handle other charicters',function(done){
    fs.readFile('./test/data/codepage.dbf',function(err,data){
      if(err){
        return done(err);
      }
      dbf(data)[1].should.not.deep.equal(utf[1]);
      dbf(data, '1250')[1].should.deep.equal(utf[1]);
      dbf(data, 'ANSI 1250')[1].should.deep.equal(utf[1]);
      dbf(data, 'windows-1250')[1].should.deep.equal(utf[1]);
      done();
    });
  });
});
