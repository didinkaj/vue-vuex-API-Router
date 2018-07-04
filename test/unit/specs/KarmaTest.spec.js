import Vue from 'vue';
import KarmaTest from '@/components/KarmaTest';

describe('KarmaTest.vue', () => {

    it(`should update when body is changed.`, done => {
        const Constructor = Vue.extend(KarmaTest);

        const comp = new Constructor().$mount();

        comp.body = 'New Text';

        Vue.nextTick(() => {
            expect(comp.$el.textContent)
                .to.equal('New Text');
            done();
        });
    });





});