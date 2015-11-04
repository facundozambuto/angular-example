describe('Filter: words', function() {
    'use strict';
   var filter;
   // Refresh the $filter every time.
   beforeEach(module('common-filters'));
   beforeEach(inject(function(_$filter_) {
       filter = _$filter_;
        })
    );

   it('should return array of words', function() {
     expect(filter('words')('one two three')).to.deep.equal(['one', 'two', 'three']);
   });
   it('should return empty array', function() {
     expect(filter('words')('')).to.equal('');
   });
   
});
