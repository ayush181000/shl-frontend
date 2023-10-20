'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { cn } from '@/lib/utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  smartSearch: z.string().optional(),
  projectTitle: z.string().optional(),
  projectTechnologies: z.string().optional(),
  technicalSkillsetFrontend: z.string().optional(),
  technicalSkillsetBackend: z.string().optional(),
  technicalSkillsetDatabases: z.string().optional(),
  technicalSkillsetInfrastructre: z.string().optional(),
  otherInformationAvailability: z.string().optional(),
});

export default function Home() {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState<any | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const getData = async (query: any = {}) => {
    let link = 'https://shl-backend-gz2y.onrender.com?';
    // let link = 'http://localhost:4000?';

    if (query.smartSearch) {
      link = link + `smartSearch=${query.smartSearch}&`;
    }

    if (query.projectTitle) {
      link = link + `projectTitle=${query.projectTitle}`;
    }

    if (query.projectTechnologies) {
      link = link + `projectTechnologies=${query.projectTechnologies}&`;
    }

    if (query.technicalSkillsetFrontend) {
      link =
        link + `technicalSkillsetFrontend=${query.technicalSkillsetFrontend}&`;
    }

    if (query.technicalSkillsetBackend) {
      link =
        link + `technicalSkillsetBackend=${query.technicalSkillsetBackend}&`;
    }

    if (query.technicalSkillsetDatabases) {
      link =
        link +
        `technicalSkillsetDatabases=${query.technicalSkillsetDatabases}&`;
    }

    if (query.technicalSkillsetInfrastructre) {
      link =
        link +
        `technicalSkillsetInfrastructre=${query.technicalSkillsetInfrastructre}&`;
    }

    if (query.otherInformationAvailability) {
      link =
        link +
        `otherInformationAvailability=${query.otherInformationAvailability}&`;
    }

    console.log(link);

    const res = await axios.get(link);
    // console.log(res.data.data);
    setData(res.data.data);
  };

  const setCard = (entry: any) => {
    setSelectedCard(entry);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    getData(values);
  }

  return (
    <div className='flex'>
      <div className='flex-1'>
        <div className='mx-4 my-2'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='smartSearch'
                render={({ field }) => (
                  <FormItem className='grow'>
                    <FormLabel className='text-xs'>Smart Search</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex gap-x-4 text-xs'>
                <FormField
                  control={form.control}
                  name='projectTitle'
                  render={({ field }) => (
                    <FormItem className='grow'>
                      <FormLabel className='text-xs'>Project Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='projectTechnologies'
                  render={({ field }) => (
                    <FormItem className='grow'>
                      <FormLabel className='text-xs'>
                        Project Technologies
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex gap-x-4 text-sm'>
                <FormField
                  control={form.control}
                  name='technicalSkillsetFrontend'
                  render={({ field }) => (
                    <FormItem className='grow'>
                      <FormLabel className='text-xs'>
                        Technical Skillset Frontend
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='technicalSkillsetBackend'
                  render={({ field }) => (
                    <FormItem className='grow'>
                      <FormLabel className='text-xs'>
                        Technical Skillset Backend
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex gap-x-4 text-sm'>
                <FormField
                  control={form.control}
                  name='technicalSkillsetDatabases'
                  render={({ field }) => (
                    <FormItem className='grow'>
                      <FormLabel className='text-xs'>
                        Technical Skillset Databases
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='technicalSkillsetInfrastructre'
                  render={({ field }) => (
                    <FormItem className='grow'>
                      <FormLabel className='text-xs'>
                        Technical Skillset Infrastructre
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name='otherInformationAvailability'
                render={({ field }) => (
                  <FormItem className='grow'>
                    <FormLabel className='text-xs'>
                      Other Information Availability
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className='my-4 ml-auto justify-center' type='submit'>
                Submit
              </Button>
            </form>
          </Form>
        </div>
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
                          {entry.name}
                        </p>
                      </div>
                      <div className='my-2'>
                        <p className='text-slate-500'>Project.Technologies</p>
                        <p>{entry.technologies || '—'}</p>
                      </div>
                      <div className='my-2'>
                        <p className='text-slate-500'>
                          Technical_Skillset.Frontend
                        </p>
                        <p>{entry.frontend || '—'}</p>
                      </div>
                      <div className='my-2'>
                        <p className='text-slate-500'>
                          Technical_Skillset.Backend
                        </p>
                        <p>{entry.backend || '—'}</p>
                      </div>
                      <div className='my-2'>
                        <p className='text-slate-500'>
                          Technical_Skillset.Databases
                        </p>
                        <p>{entry.databases || '—'}</p>
                      </div>
                      <div className='my-2'>
                        <p className='text-slate-500'>
                          Technical_Skillset.Infrastructure
                        </p>
                        <p>{entry.infrastructre || '—'}</p>
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
              <p className='font-semibold'>{selectedCard.name}</p>
              <br />
              <div>
                <p className='text-sm font-light'>Project.Title</p>
                <p>{selectedCard.name || '—'}</p>
              </div>

              <div>
                <p className='text-sm font-light'>Project.Technologies</p>
                <p>{selectedCard.technologies || '—'}</p>
              </div>

              <div>
                <p className='text-sm font-light'>
                  Technical_Skillset.Frontend
                </p>
                <p>{selectedCard.frontend || '—'}</p>
              </div>

              <div>
                <p className='text-sm font-light'>Technical_Skillset.Backend</p>
                <p>{selectedCard.backend || '—'}</p>
              </div>

              <div>
                <p className='text-sm font-light'>
                  Technical_Skillset.Databases
                </p>
                <p>{selectedCard.databases || '—'}</p>
              </div>

              <div>
                <p className='text-sm font-light'>
                  Technical_Skillset.Infrastructure
                </p>
                <p>{selectedCard.infrastructre || '—'}</p>
              </div>

              <div>
                <p className='text-sm font-light'>
                  Other_Information.Availability
                </p>
                <p>{selectedCard.availability || '—'}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
