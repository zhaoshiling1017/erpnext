/* eslint-disable */
// rename this file from _test_[name] to test_[name] to activate
// and remove above this line

QUnit.test("test: Crop Cycle", function (assert) {
	let done = assert.async();

	// number of asserts
	assert.expect(1);

	frappe.run_serially([
		// insert a new Crop Cycle
		() => frappe.tests.make('Crop Cycle', [
			// values to be set
			{title: 'Basil from seed 2017'},
			{land_unit: 'Basil Farm'},
			{crop: 'Basil'},
			{start_date: '2017-11-11'},
			{detected_pest: [
				[
					{pest: 'Aphids'},
					{start_date: '2017-11-21'}
				]
			]}
		]),
		() => assert.equal(cur_frm.doc.name, 'Basil from seed 2017'),
		() => done()
	]);
});
