'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export default function Home() {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState<any | null>(null);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const res = await axios.get('http://localhost:4000');
    setData(res.data);
  };

  const setCard = (entry: any) => {
    setSelectedCard(entry);
  };

  return (
    <div className='flex'>
      <div className='flex-1'>
        <div className='flex gap-x-3 gap-y-3 flex-wrap mx-2 my-3 justify-center'>
          {data.length > 0 &&
            data.map((entry: any) => {
              return (
                <>
                  <Card className='w-60' onClick={() => setCard(entry)}>
                    <CardContent className='text-xs text-left'>
                      <div className='my-3'>
                        <p className='text-slate-500'>Title</p>
                        <p className='font-bold text-sm text-slate-600'>
                          {entry.projectTitle}
                        </p>
                      </div>
                      <div className='my-2'>
                        <p className='text-slate-500'>Project.Technologies</p>
                        <p>{entry.projectTechnologies || '—'}</p>
                      </div>
                      <div className='my-2'>
                        <p className='text-slate-500'>
                          Technical_Skillset.Frontend
                        </p>
                        <p>{entry.technicalSkillsetFrontend || '—'}</p>
                      </div>
                      <div className='my-2'>
                        <p className='text-slate-500'>
                          Technical_Skillset.Backend
                        </p>
                        <p>{entry.technicalSkillsetBackend || '—'}</p>
                      </div>
                      <div className='my-2'>
                        <p className='text-slate-500'>
                          Technical_Skillset.Databases
                        </p>
                        <p>{entry.technicalSkillsetDatabases || '—'}</p>
                      </div>
                      <div className='my-2'>
                        <p className='text-slate-500'>
                          Technical_Skillset.Infrastructure
                        </p>
                        <p>{entry.technicalSkillsetInfrastructre || '—'}</p>
                      </div>
                    </CardContent>
                  </Card>
                </>
              );
            })}
        </div>
      </div>

      <div
        className={cn(
          selectedCard ? '' : 'hidden',
          'w-72 h-screen bg-gray-200 sticky left-0 top-0 overflow-auto text-wrap no-scrollbar'
        )}
      >
        {selectedCard && (
          <div className='p-4'>
            <Button
              className='absolute right-0 mx-4'
              onClick={() => {
                setSelectedCard(null);
              }}
            >
              X
            </Button>
            <div className='flex flex-col gap-y-4'>
              <p className='font-semibold'>{selectedCard.projectTitle}</p>
              <br />
              <div>
                <p className='text-sm font-light'>Project.Title</p>
                <p>{selectedCard.projectTitle || '—'}</p>
              </div>

              <div>
                <p className='text-sm font-light'>Project.Technologies</p>
                <p>{selectedCard.projectTechnologies || '—'}</p>
              </div>

              <div>
                <p className='text-sm font-light'>
                  Technical_Skillset.Frontend
                </p>
                <p>{selectedCard.technicalSkillsetFrontend || '—'}</p>
              </div>

              <div>
                <p className='text-sm font-light'>Technical_Skillset.Backend</p>
                <p>{selectedCard.technicalSkillsetBackend || '—'}</p>
              </div>

              <div>
                <p className='text-sm font-light'>
                  Technical_Skillset.Databases
                </p>
                <p>{selectedCard.technicalSkillsetDatabases || '—'}</p>
              </div>

              <div>
                <p className='text-sm font-light'>
                  Technical_Skillset.Infrastructure
                </p>
                <p>{selectedCard.technicalSkillsetInfrastructre || '—'}</p>
              </div>

              <div>
                <p className='text-sm font-light'>
                  Other_Information.Availability
                </p>
                <p>{selectedCard.otherInformationAvailability || '—'}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
