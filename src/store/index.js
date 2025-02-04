import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({ 
        isLoading: false,
        jobs: [
          {
            id : 1,
            roles: [
            {
              title: 'Academic Support Lead',
              description: 'Academic Support Lead duties.',
              date: '2023 ⇨ 2025',
            },
            {
              title: 'Academic Fellow',
              description: 'Academic Fellow duties.',
              date: '2021 ⇨ 2023',
            }
                  ],
            company: 'Tech Elevator',
            location: 'Remote',
            date: '2021 ⇨ 2025',
            abstract: ''
          },
          {
            id: 2,
            roles: [
            {
              title: 'Enhanced Due Diligence',
              description: 'EDD duties.',
              date: '2018 ⇨ 2020',
            }, 
            {
              title: 'Verification Specialist',
              description: 'Verification duties.',
              date: '2017 ⇨ 2018',
            },
            {
              title: 'Customer Service Specialist',
              description: 'CS Specialist duties.',
              date: '2016 ⇨ 2017',
            },
            {
              title: 'Customer Service Agent',
              description: 'CS Agent duties.',
              date: '2015 ⇨ 2016',
            }
                  ],
            company: 'Transferwise',
            location: 'Tampa, FL',
            date: '2015 ⇨ 2020',
            abstract: ''
          },
        ] 
    }),
    getters: {
      
    },
    actions: {
      load(){ 
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
            }, 500);
    }
      },
    },
  )