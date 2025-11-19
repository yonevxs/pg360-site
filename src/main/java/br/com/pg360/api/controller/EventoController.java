package br.com.pg360.api.controller;

import br.com.pg360.api.model.Evento;
import br.com.pg360.api.repository.EventoRepository;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/eventos")

@Tag(name = "Eventos", description = "Endpoints para gerenciamento de eventos da cidade")
@CrossOrigin("http://localhost:5173")

public class EventoController {

    @Autowired
    private EventoRepository repository;

    @Operation(
            summary = "Criar novo evento",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    required = true,
                    content = @Content(schema = @Schema(implementation = Evento.class))
            )
    )
    @PostMapping
    public ResponseEntity<Evento> criar(@RequestBody Evento evento) {
        return ResponseEntity.status(201).body(repository.save(evento));
    }

    @GetMapping
    public List<Evento> listarTodos() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Evento> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Evento> atualizar(
            @PathVariable Long id,
            @RequestBody Evento novo
    ) {
        return repository.findById(id)
                .map(e -> {
                    e.setNmEvento(novo.getNmEvento());
                    e.setDsEvento(novo.getDsEvento());
                    e.setDtInicioEvento(novo.getDtInicioEvento());
                    e.setDtFimEvento(novo.getDtFimEvento());
                    e.setLocal(novo.getLocal());
                    e.setCategoria(novo.getCategoria());
                    return ResponseEntity.ok(repository.save(e));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @Operation(summary = "Buscar eventos por intervalo de datas")
    @GetMapping("/intervalo")
    public ResponseEntity<List<Evento>> buscarPorIntervalo(
            @RequestParam LocalDate inicio,
            @RequestParam LocalDate fim
    ) {
        List<Evento> eventos = repository.buscarEventosEntre(inicio, fim);
        if (eventos.isEmpty()) return ResponseEntity.noContent().build();
        return ResponseEntity.ok(eventos);
    }
}
